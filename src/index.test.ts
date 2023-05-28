import { expect, test } from 'vitest'
import {add} from './index'

test('it adds two numbers together', () => {
  expect(add(1, 2)).toBe(3)
})
