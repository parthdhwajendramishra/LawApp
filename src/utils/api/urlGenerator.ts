

const urlGenerator = <T extends Object>(dto: T): string => {

    let url = '';
    for (const key in dto) {
        if (dto.hasOwnProperty(key)) {
            if (dto[key] !== '')
                url = url + `&${key}=${dto[key]}`;
        }
    }
    return url.slice(1);
}

export default urlGenerator;