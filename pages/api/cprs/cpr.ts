const MULTIPLIER_SEQUENCE = [4, 3, 2, 7, 6, 5, 4, 3, 2, 1];

const convertCprStringToDigits = function (cpr: string): number[] {
  return cpr.split('').map((digit) => {
    return parseInt(digit);
  });
};

const reduceCpr = function (
  previousValue: number,
  currentValue: number,
  index: number
) {
  return previousValue + currentValue * MULTIPLIER_SEQUENCE[index];
};

const resetNumber = function (number: number) {
  if (number > 9) {
    return 0;
  } else {
    return number;
  }
};

const isMaxSerialNummer = function (serialNumber: number[]) {
  return (
    serialNumber[3] === 9 &&
    serialNumber[2] === 9 &&
    serialNumber[1] === 9 &&
    serialNumber[0] === 9
  );
};

const isValidBirthday = function (birthday: string): boolean {
  if (birthday.length !== 6) {
    return false;
  }

  if (isNaN(parseInt(birthday))) {
    return false;
  }

  return true;
};

export const validateCpr = function (cpr: string): boolean {
  const digitisInCpr = convertCprStringToDigits(cpr);
  const result = digitisInCpr.reduce(reduceCpr, 0);
  return result % 11 === 0;
};

export const generateCprs = function (birthday: string): string[] {
  if (!isValidBirthday(birthday)) {
    throw new Error();
  }

  const cprs: string[] = [];
  const serialNumbers = [0, 0, 0, 0];

  do {
    if (serialNumbers[3] <= 9) {
      serialNumbers[3] += 1;
    } else {
      serialNumbers[3] = 0;
    }

    if (serialNumbers[3] > 9 && serialNumbers[2] <= 9) {
      serialNumbers[2] += 1;
    }

    if (serialNumbers[2] > 9 && serialNumbers[1] <= 9) {
      serialNumbers[1] += 1;
    }

    if (serialNumbers[1] > 9 && serialNumbers[0] <= 9) {
      serialNumbers[0] += 1;
    }

    serialNumbers[3] = resetNumber(serialNumbers[3]);
    serialNumbers[2] = resetNumber(serialNumbers[2]);
    serialNumbers[1] = resetNumber(serialNumbers[1]);
    serialNumbers[0] = resetNumber(serialNumbers[0]);

    const cpr = birthday + serialNumbers.join('');

    if (validateCpr(cpr)) {
      cprs.push(cpr);
    }

    if (isMaxSerialNummer(serialNumbers)) {
      break;
    }
  } while (
    serialNumbers[3] <= 9 &&
    serialNumbers[2] <= 9 &&
    serialNumbers[1] <= 9 &&
    serialNumbers[0] <= 9
  );

  return cprs;
};
