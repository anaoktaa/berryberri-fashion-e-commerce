export const RupiahFormat = (nominal) => {
    let rupiah = (parseInt(nominal).toLocaleString('id', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }))
    return rupiah;
}