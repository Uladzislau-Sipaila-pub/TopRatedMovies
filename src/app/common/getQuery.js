export default function getQuery(props, param) {
    const search = props.location.search;
    const params = search && search
        .split(/(\?|\&)/)
        .reduce((params, currentValue) => {
            const [key, value] = currentValue.split('=');
            params[key] = value;

            return params;
        }, {});

    return params && params[param];
}