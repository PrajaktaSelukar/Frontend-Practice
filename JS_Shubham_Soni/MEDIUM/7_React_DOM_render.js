const rootEle = document.getElementById("root");

const renderDom = ({ type, props, children }) => {
    // Edge cases
    if (!type) return null;
    const ele = document.createElement(type);
    // Set attributes and inline styles
    if (props) {
        Object.entries(props).forEach(([key, value]) => {
            if (key === 'style') {
                ele.style.cssText = value;
            } else {
                ele.setAttribute(key, value);
            }
        });
    }
    // Render children
    if (Array.isArray(children)) {
        children.forEach(child => ele.appendChild(renderDom(child)));
    } else if (typeof children === "string") {
        ele.textContent = children;
    }
    return ele;
};

if (rootEle) {
    rootEle.appendChild(renderDom(dom));
}