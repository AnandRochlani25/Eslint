module.exports = {
    meta: {
        messages: {
            avoidName: "Avoid using variables named '{{ name }}'"
        }
    },
    create(context) {
        return {
            Identifier(node) {
                if (node.name === "count" || node.name=="flag" ) {
                    context.report({
                        node,
                        messageId: "avoidName",
                        data: {
                            name: node.name,
                        }
                    });
                }
            }
        };
    }
};