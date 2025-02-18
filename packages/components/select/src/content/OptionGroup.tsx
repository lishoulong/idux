/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import { defineComponent, inject } from 'vue'

import { isString } from 'lodash-es'

import { selectToken } from '../token'
import { optionGroupProps } from '../types'

export default defineComponent({
  props: optionGroupProps,
  setup(props) {
    const { slots, mergedPrefixCls } = inject(selectToken)!
    return () => {
      const { label, rawOption } = props
      const prefixCls = `${mergedPrefixCls.value}-option-group`
      const labelRender = rawOption.customLabel ?? 'optionGroupLabel'
      const labelSlot = isString(labelRender) ? slots[labelRender] : labelRender
      return (
        <div class={prefixCls} {...rawOption.additional} aria-label={label}>
          <span class={`${prefixCls}-label`}>{labelSlot ? labelSlot(rawOption) : label}</span>
        </div>
      )
    }
  },
})
