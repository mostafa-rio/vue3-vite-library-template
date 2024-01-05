import { mount } from '@vue/test-utils'
import { test, expect} from "vitest";
import {MyButton} from '@/components/index';

test('init', () => { 
        const myButton = mount(MyButton)
    expect(myButton.text()).toBe('click me')
})