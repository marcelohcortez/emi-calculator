export const numberConverter = (x: number | undefined) => {
    if (x) return `$ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}