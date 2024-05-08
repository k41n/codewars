module Potapkin
  ROWAN_UNITS     = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'].freeze
  ROWAN_TENS      = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'].freeze
  ROWAN_HUNDRENDS = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'].freeze
  ROWAN_THOUSANDS = ['', 'M', 'MM', 'MMM'].freeze

  def roman(arabic)
    return TypeError, "#{arabic.inspect} not an Integer" unless arabic.is_a?(Integer)
    return ArgumentError, "#{arabic.inspect} out of range 1..3999" unless (1..3999).cover?(arabic)

    ROWAN_THOUSANDS[arabic / 1_000] +
      ROWAN_HUNDRENDS[arabic % 1_000 / 100] +
      ROWAN_TENS[arabic % 100 / 10] +
      ROWAN_UNITS[arabic % 10]
  end

  module_function :roman
end