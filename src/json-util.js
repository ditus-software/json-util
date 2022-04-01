//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//

/**
 * Contains static methods for working with JSON.
 */
 export default class JsonUtil {
  /**
   * Gets the value at the specified path.
   *
   * @param {string} json The JSON.
   * @param {string} path The path of the value.
   * @returns {any} The value at the specified path.
   */
  static getValue(json, path) {
    return path.split('.').reduce((r, k) => r[k], json) ?? null;
  }
}
