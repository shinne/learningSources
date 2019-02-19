let state = { num: 5 };
let timer;
let preVDom;

function render(element) {
    // 初始化的VD
    const vdom = view();
    preVDom = vdom;

    const dom = createElement(vdom);
    element.appendChild(dom);


    timer = setInterval(() => {
        state.num += 1;
        tick(element);
    }, 500);
}

function tick(element) {
    if (state.num > 20) {
        clearTimeout(timer);
        return;
    }

    const newVDom = view();
    // 给 DOM 打个补丁
    patch(element, patchObj);
}

function view() {
    return ();
}



function tick(element) {
    if (state.num > 20) {
        clearTimeout(timer);
        return;
    }

    const newVDom = view();

    // 生成差异对象
    const patchObj = diff(preVDom, newVDom);
}

function diff(oldVDom, newVDom) {
    // 新建 node
    if (oldVDom == undefined) {
        return {
            type: nodePatchTypes.CREATE,
            vdom: newVDom
        }
    }

    // 删除 node
    if (newVDom == undefined) {
        return {
            type: nodePatchTypes.REMOVE
        }
    }

    // 替换 node
    if (
        typeof oldVDom !== typeof newVDom ||
        ((typeof oldVDom === 'string' || typeof oldVDom === 'number') && oldVDom !== newVDom) ||
        oldVDom.tag !== newVDom.tag
    ) {
        return {
            type: nodePatchTypes.REPLACE,
            vdom: newVDom
        }
    }

    // 更新 node
    if (oldVDom.tag) {
        // 比较 props 的变化
        const propsDiff = diffProps(oldVDom, newVDom);

        // 比较 children 的变化
        const childrenDiff = diffChildren(oldVDom, newVDom);

        // 如果 props 或者 children 有变化，才需要更新
        if (propsDiff.length > 0 || childrenDiff.some( patchObj => (patchObj !== undefined) )) {
            return {
                type: nodePatchTypes.UPDATE,
                props: propsDiff,
                children: childrenDiff
            }
        }

    }
}

// 比较 props 的变化
function diffProps(oldVDom, newVDom) {
    const patches = [];

    const allProps = {...oldVDom.props, ...newVDom.props};

    // 获取新旧所有属性名后，再逐一判断新旧属性值
    Object.keys(allProps).forEach((key) => {
            const oldValue = oldVDom.props[key];
            const newValue = newVDom.props[key];

            // 删除属性
            if (newValue == undefined) {
                patches.push({
                    type: propPatchTypes.REMOVE,
                    key
                });
            }
            // 更新属性
            else if (oldValue == undefined || oldValue !== newValue) {
                patches.push({
                    type: propPatchTypes.UPDATE,
                    key,
                    value: newValue
                });
            }
        }
    )

    return patches;
}

// 比较 children 的变化
function diffChildren(oldVDom, newVDom) {
    const patches = [];

    // 获取子元素最大长度
    const childLength = Math.max(oldVDom.children.length, newVDom.children.length);

    // 遍历并diff子元素
    for (let i = 0; i < childLength; i++) {
        patches.push(diff(oldVDom.children[i], newVDom.children[i]));
    }

    return patches;
}


// 给 DOM 打个补丁
function patch(parent, patchObj, index=0) {
    if (!patchObj) {
        return;
    }

    // 新建元素
    if (patchObj.type === nodePatchTypes.CREATE) {
        return parent.appendChild(createElement(patchObj.vdom));
    }

    const element = parent.childNodes[index];

    // 删除元素
    if (patchObj.type === nodePatchTypes.REMOVE) {
        return parent.removeChild(element);
    }

    // 替换元素
    if (patchObj.type === nodePatchTypes.REPLACE) {
        return parent.replaceChild(createElement(patchObj.vdom), element);
    }

    // 更新元素
    if (patchObj.type === nodePatchTypes.UPDATE) {
        const {props, children} = patchObj;

        // 更新属性
        patchProps(element, props);

        // 更新子元素
        children.forEach( (patchObj, i) => {
            // 更新子元素时，需要将子元素的序号传入
            patch(element, patchObj, i)
        });
    }
}

// 更新属性
function patchProps(element, props) {
    if (!props) {
        return;
    }

    props.forEach( patchObj => {
        // 删除属性
        if (patchObj.type === propPatchTypes.REMOVE) {
            element.removeAttribute(patchObj.key);
        }
        // 更新或新建属性
        else if (patchObj.type === propPatchTypes.UPDATE) {
            element.setAttribute(patchObj.key, patchObj.value);
        }
    })
}