export default {
    props: {
        // 值
        value: {
            required: true
        },
        // 选项绑定的值
        label: {
            required: true
        },
        // 只读
        readonly: {
            type: Boolean,
            default: false
        }
    }
}