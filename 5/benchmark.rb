require 'benchmark'
require './guzhin'

def expect_to_equal(expected, actual, label = nil)
  puts "#{label || ""} FAILURE!!! [#{actual}] is not equal to [#{expected}]" unless expected == actual
end

def tests(mod)
  puts "Testing #{mod.name}..."
  fn = mod.method(:find_outlier)
  expect_to_equal(11, fn.call([2, 4, 0, 100, 4, 11, 2602, 36]))
  expect_to_equal(160, fn.call([160, 3, 1719, 19, 11, 13, -21]))
  expect_to_equal(250, fn.call([7, 250, 1719, 19, 11, 13, -21, 47]))
  expect_to_equal(2580, fn.call([5, 3, 1719, 19, 11, 13, -21, 2580]))
  puts "Done"
end

def measure(label, callable)
  time = Benchmark.measure do
    callable.call();
  end
  puts "#{label} #{time.real.round(2)} s";
end

def case1(mod)
  fn = mod.method(:find_outlier)

  integers = Array.new(10_000_000).fill(100)
  integers.push(101)
  measure(
    'Find the 1 after 10M of 100s 10 times ',
    lambda {
      10.times do
        throw StandardError.new("CASE 1 failed") unless 101 == fn.call(integers)
      end
    }
  )
end

def case2(mod)
  fn = mod.method(:find_outlier)

  integers = Array.new(10_000_000).fill(100)
  integers[0] = 101;
  measure(
    "Find the 1 preceding 10M of zeros 10 times",
    lambda {
      10.times do
        throw StandardError.new("CASE 2 failed") unless 101 == fn.call(integers)
      end
    }
  )
end

SOLUTIONS = [
  {
    author: "Serhey Guzhin",
    module: Guzhin,
  },
];

def test_solution(solution)
  tests(solution[:module])
  case1(solution[:module])
  case2(solution[:module])
end

SOLUTIONS.each do |solution|
  test_solution(solution);
end
