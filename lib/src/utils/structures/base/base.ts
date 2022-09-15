class Base {
    public data: any = null
    constructor(data: any) {
        this.data = data.profileUsers[0]
        let datas = this._data(this.data)
        return datas
    }
    _data(data: any) {
        return data
    }
}

export default Base