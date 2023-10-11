function getDigitName() {
    const digitInput = document.getElementById('digit');
    const digit = parseInt(digitInput.value);

    let digitName = '';

    switch (digit) {
      case 0:
        digitName = 'Zero';
        break;
      case 1:
        digitName = 'One';
        break;
      case 2:
        digitName = 'Two';
        break;
      case 3:
        digitName = 'Three';
        break;
      case 4:
        digitName = 'Four';
        break;
      case 5:
        digitName = 'Five';
        break;
      case 6:
        digitName = 'Six';
        break;
      case 7:
        digitName = 'Seven';
        break;
      case 8:
        digitName = 'Eight';
        break;
      case 9:
        digitName = 'Nine';
        break;
      default:
        digitName = 'Invalid digit';
        break;
    }

    document.getElementById('digitName').textContent = 'Digit name: ' + digitName;
  }