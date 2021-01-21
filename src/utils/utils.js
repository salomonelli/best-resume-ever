export function importAll(r){
  let __modules = {}
  r.keys().forEach(key => {
    let m = r(key).default
    let n = m.name
    __module[n] = m
  });
  return __modules
}
