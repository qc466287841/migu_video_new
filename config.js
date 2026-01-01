// 用户id
const userId = process.env.muserId || "463943941"
// 用户token 可以使用网页登录获取
const token = process.env.mtoken || "nlpsB251E6B405F953A0D37C"
// 本地运行端口号
const port = process.env.mport || 1234
// 公网/自定义访问地址
const host = process.env.mhost || ""
// 画质
// 4蓝光(需要登录且账号有VIP)
// 3高清
// 2标清
const rateType = process.env.mrateType || 4
// 是否刷新token，可能是导致封号的原因
// const refreshToken = process.env.mrefreshToken || true

export { userId, token, port, host, rateType/* , refreshToken */ }
