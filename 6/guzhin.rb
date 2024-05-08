module Guzhin
  def roman(number)
    roman_numerals = {
      1000 => 'M',
      900  => 'CM',
      500  => 'D',
      400  => 'CD',
      100  => 'C',
      90   => 'XC',
      50   => 'L',
      40   => 'XL',
      10   => 'X',
      9    => 'IX',
      5    => 'V',
      4    => 'IV',
      1    => 'I',
    }

    roman_number = ''
    roman_numerals.each do |value, roman_symbol|
      while number >= value
        roman_number  += roman_symbol
        number        -= value
      end
    end

    roman_number
  end

  module_function :roman
end