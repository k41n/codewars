require 'benchmark'
require './potapkin'
require './guzhin'

def expect_to_equal(expected, actual, label = nil)
  if expected != actual
    puts "#{label || ""} FAILURE!!! [#{actual}] is not equal to [#{expected}]" 
  end
end

def tests(mod)
  fn = mod.method(:roman)
  expect_to_equal("I", fn.call(1), "1 = I");
  expect_to_equal("II", fn.call(2), "2 = II");
  expect_to_equal("III", fn.call(3), "3 = III");
  expect_to_equal("IV", fn.call(4), "4 = IV");
  expect_to_equal("V", fn.call(5), "5 = V");
  expect_to_equal("VI", fn.call(6), "6 = VI");
  expect_to_equal("VII", fn.call(7), "7 = VII");
  expect_to_equal("VIII", fn.call(8), "8 = VIII");
  expect_to_equal("IX", fn.call(9), "9 = IX");
  expect_to_equal("X", fn.call(10), "10 = X");
  expect_to_equal("XI", fn.call(11), "11 = XI");
  expect_to_equal("XII", fn.call(12), "12 = XII");
  expect_to_equal("XIII", fn.call(13), "13 = XIII");
  expect_to_equal("XIV", fn.call(14), "14 = XIV");
  expect_to_equal("XV", fn.call(15), "15 = XV");
  expect_to_equal("XVI", fn.call(16), "16 = XVI");
  expect_to_equal("XVII", fn.call(17), "17 = XVII");
  expect_to_equal("XVIII", fn.call(18), "18 = XVIII");
  expect_to_equal("XIX", fn.call(19), "19 = XIX");
  expect_to_equal("XX", fn.call(20), "20 = XX");
  expect_to_equal("XXI", fn.call(21), "21 = XXI");
  expect_to_equal("XXXII", fn.call(32), "32 = XXXII");
  expect_to_equal("XLIV", fn.call(44), "44 = XLIV");
  expect_to_equal("LV", fn.call(55), "55 = LV");
  expect_to_equal("LXVI", fn.call(66), "66 = LXVI");
  expect_to_equal("XCIX", fn.call(99), "99 = XCIX");
  expect_to_equal("C", fn.call(100), "100 = C");
  expect_to_equal("CI", fn.call(101), "101 = CI");
  expect_to_equal("CCII", fn.call(202), "202 = CCII");
  expect_to_equal("CCCXLIV", fn.call(344), "344 = CCXLIV");
  expect_to_equal("CDXLIV", fn.call(444), "444 = CDXLIV");
  expect_to_equal("D", fn.call(500), "500 = D");
  expect_to_equal("DCXLIX", fn.call(649), "649 = DCXLIX");
  expect_to_equal("CM", fn.call(900), "900 = CM");
  expect_to_equal("MMMCMXCIX", fn.call(3999), "3999 = MMMCMXCIX");
end

def measure(label, callable, divide_by = 1)
  time = Benchmark.measure do
    callable.call();
  end
  time.real.to_f / divide_by
end

def case1(mod)
  fn = mod.method(:roman)

  measure(
    "Find the roman interpretation of 10_000_000 of 3999",
    lambda {
      10_000_000.times do
        throw StandardError.new("CASE I failed") if "MMMCMXCIX" != fn.call(3999)
      end
    },
    10_000_000,
  )
end

def case2(mod)
  fn = mod.method(:roman)

  measure(
    "Find the roman interpretation of 10_000_000 of 1",
    lambda {
      10_000_000.times do
        throw StandardError.new("CASE II failed") if "I" != fn.call(1)
      end
    },
    10_000_000,
  )
end

SOLUTIONS = [
  {
    author: "Kirill Potapkin",
    module: Potapkin,
  },
  {
    author: "Serhei Guzhin",
    module: Guzhin,
  },
];

def test_solution(solution)
  tests(solution[:module])
  case1_ms = case1(solution[:module])
  case2_ms = case2(solution[:module])
  puts [
    "#{solution[:author]} (Ruby)",
    (case1_ms * 1_000_000_000).round(2),
    (case2_ms * 1_000_000_000).round(2)
  ].join(';').gsub('.', ',')
end

SOLUTIONS.each do |solution|
  test_solution(solution);
end
