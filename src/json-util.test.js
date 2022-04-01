//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//

import JsonUtil from './json-util';

describe('JsonUtil', () => {
  describe('getValue', () => {
    it('returns null if the simple path does not exist within the JSON object.', () => {
      expect(JsonUtil.getValue({ id: 1, name: 'John' }, 'age')).toBeNull();
    });

    it('returns the value if the simple path exists within the JSON object.', () => {
      expect(JsonUtil.getValue({ id: 1, name: 'John' }, 'name')).toBe('John');
    });

    it('returns null if the multi-level path does not exist within the JSON object.', () => {
      expect(JsonUtil.getValue({ id: 1, name: 'John', school: { id: 10, name: 'Lake Ontario High-school' } }, 'school.city')).toBeNull();
    });

    it('returns the value if the multi-level path exists within the JSON object.', () => {
      expect(JsonUtil.getValue({ id: 1, name: 'John', school: { id: 10, name: 'Lake Ontario High-school' } }, 'school.name')).toBe('Lake Ontario High-school');
    });
  });
});
