

export const Sorting = (sortField: string, sortConfig: any, paginatedData: any) => {
    let direction = 'ascending';

    if (sortConfig.field === sortField && sortConfig.direction === 'ascending') {
        direction = 'descending';
    }

    const sorted = [...paginatedData].sort((a, b) => {
        const valueA = a[sortField];
        const valueB = b[sortField];

        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return (direction === 'ascending') ? valueA - valueB : valueB - valueA;
        } else {
            const stringA = String(valueA).toLowerCase();
            const stringB = String(valueB).toLowerCase();
            return (direction === 'ascending') ? stringA.localeCompare(stringB) : stringB.localeCompare(stringA);
        }
    });

    return sorted;
};