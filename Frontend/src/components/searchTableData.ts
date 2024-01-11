
export const Searching = (query: string, paginatedData: any, displayData: any, field: string) => {

    const filtered = "";
    if (query === '') {
        return paginatedData;
    } else {
        const filtered = displayData.filter((item: any) =>
            item[field].toLowerCase().includes(query.toLowerCase())
        );
        return filtered;
    }
};