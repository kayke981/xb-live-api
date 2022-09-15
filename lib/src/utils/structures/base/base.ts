class Base {
    public data: any = null
    constructor(data: any) {
        this.data = data.profileUsers[0]
        let datas = this._update(this.data)
        return datas
    }
    _data(data: any) {
        return data
    }

    _update(data: any) {
        return data
    }
}

export default Base