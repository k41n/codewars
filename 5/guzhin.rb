module Guzhin
  def find_outlier(array)
    return 'Argument is not array' unless array.is_a?(Array)
  
    return 'The array must contain more than 3 elements' if array.length < 3
  
    evens, odds = array.partition do |num|
      return 'The array must contain only integers' unless num.is_a?(Integer)
  
      num.even?
    end
  
    return 'The array must contain one outlier' unless evens.length == 1 || odds.length == 1
    return evens.first if evens.length == 1
  
    odds.first
  end

  module_function :find_outlier
end