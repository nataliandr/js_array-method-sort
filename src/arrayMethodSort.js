'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      const sA = String(a);
      const sB = String(b);

      if (sA < sB) {
        return -1;
      }

      if (sA > sB) {
        return 1;
      }

      return 0;
    };

    const compare = compareFunction || defaultCompare;

    // 2. Алгоритм Bubble Sort
    // Робимо копію довжини, щоб не звертатися до this.length постійно
    const len = this.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        // Викликаємо compare з поточними елементами
        if (compare(this[j], this[j + 1]) > 0) {
          // Міняємо місцями (Swap)
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
