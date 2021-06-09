//executable function 1






// function pp(n,cb) {
//         if(n%2 == 0){
//             cb(null,n)
//         }else cb(n)
//     }
    
//     pp(2,(err,n)=>{
//         if (err) {
//             throw err
//         }else {
//             console.log(n);
//         }
//     })


// const input = [
//     {cat: "A",
//       prod: "prodA"},


//     {cat: "A",
//       prod: "prodB"},


//     {cat: "B",
//       prod: "prodC"},

      
//     {cat: "B",
//       prod: "prodD"},


//     {cat:"C",
//         prod:"proD"}
//   ];


//   const output = []

//   input.forEach(i=>{
      
//     const  k = output.findIndex(e => e.cat == i.cat)
//     console.log(k);

//       if(k == -1){
//         output.push({cat:i.cat,products:[i.prod]})
//       }else{
//         output[k].products.push(i.prod)
//         }
      
//   })
//   console.log(output);


//   //const output = [
//     //     { cat: 'A', products: [ 'prodA', 'prodB' ] },
//     //     { cat: 'B', products: [ 'prodC', 'prodD' ] }
//     //   ]


// function md1(req,next) {
//     req.code = 200;
//     next()
// }

// function name(req) {
//     req.ans = req.ans + 3
// }

// app(2,md1,md2,req=>{if(req.code == 200) console.log(req.ans)})