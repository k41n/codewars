require "benchmark"

def isOdd(num)
  result = num & 1 == 1
  result
end

def isEven(num)
  result = num & 1 == 0
  result
end

def findOutlierDetector(integers)
  seenOdd = false;
  seenEven = false;

  integers.each do |integer|
    if isOdd(integer)
      if seenOdd
        return ->isEven(Int32)
      else
        seenOdd = true
      end
    else
      if seenEven
        return ->isOdd(Int32)
      else
        seenEven = true
      end
    end
  end
end

def findOutlier(integers)
  outlierDetector = findOutlierDetector(integers[0..3]);
  if !outlierDetector
    return 0
  end

  integers.find do |integer|
    result = outlierDetector.call(integer)
    result
  end
end

def expect_to_equal(expected, actual, label = nil)
  puts "#{label || ""} FAILURE!!! [#{actual}] is not equal to [#{expected}]" unless expected == actual
end

def tests
  puts "Testing..."
  expect_to_equal(11, findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
  expect_to_equal(160, findOutlier([160, 3, 1719, 19, 11, 13, -21]))
  expect_to_equal(250, findOutlier([7, 250, 1719, 19, 11, 13, -21, 47]))
  expect_to_equal(2580, findOutlier([5, 3, 1719, 19, 11, 13, -21, 2580]))
  puts "Done"
end

def measure(label, callable)
  time = Benchmark.measure do
    callable.call();
  end
  puts "#{label} #{time.real.round(2)} s";
end

def case1
  integers = Array(Int32).new(10_000_000, 100)
  integers.push(101)
  measure(
    "Find the 1 after 10M of 100s 10 times ",
    -> {
      10.times do
        raise Exception.new("CASE 1 failed") unless 101 == findOutlier(integers)
      end
    }
  )
end

def case2
  integers = Array(Int32).new(10_000_000, 100)
  integers[0] = 101;
  measure(
    "Find the 1 preceding 10M of zeros 10M times",
    -> {
      10_000_000.times do
        raise Exception.new("CASE 2 failed") unless 101 == findOutlier(integers)
      end
    }
  )
end

def test_solution
  tests
  case1
  case2
end

test_solution