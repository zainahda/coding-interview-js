let voucher1 = "TGD";
    voucher2 = "YCC";
    voucher3 = "SKU";
    voucherCode = "QWERTYUIOP";

for (let i = 0; i <= 1000; i++) {

  if (i <= 9){
    console.log(voucher1 + i + voucherCode.slice(0, 8));
  } else if (i <= 99) {
    console.log(voucher1 + i + voucherCode.slice(0, 7));
  } else if (i <= 999) {
    console.log(voucher1 + i + voucherCode.slice(0, 6));
  } else if (i === 1000) {
    console.log(voucher1 + i + voucherCode.slice(0, 5));
  }

}

for (let i = 0; i <= 1000; i++) {

  if (i <= 9){
    console.log(voucher2 + i + voucherCode.slice(0, 8));
  } else if (i <= 99) {
    console.log(voucher2 + i + voucherCode.slice(0, 7));
  } else if (i <= 999) {
    console.log(voucher2 + i + voucherCode.slice(0, 6));
  } else if (i === 1000) {
    console.log(voucher2 + i + voucherCode.slice(0, 5));
  }

}

for (let i = 0; i <= 1000; i++) {

  if (i <= 9){
    console.log(voucher3 + i + voucherCode.slice(0, 8));
  } else if (i <= 99) {
    console.log(voucher3 + i + voucherCode.slice(0, 7));
  } else if (i <= 999) {
    console.log(voucher3 + i + voucherCode.slice(0, 6));
  } else if (i === 1000) {
    console.log(voucher3 + i + voucherCode.slice(0, 5));
  }

}


const users = [
  {
      "id":1,
      "email":"george.bluth@reqres.in",
      "first_name":"George",
      "last_name":"Bluth",
      "tag":"new_user"
  },
  {
      "id":2,
      "email":"janet.weaver@reqres.in",
      "first_name":"Janet",
      "last_name":"Weaver",
      "tag":"old_user"
  },
  {
      "id":3,
      "email":"emma.wong@reqres.in",
      "first_name":"Emma",
      "last_name":"Wong",
      "tag":"new_user"
  },
  {
      "id":4,
      "email":"eve.holt@reqres.in",
      "first_name":"Eve",
      "last_name":"Holt",
      "tag":"old_user"
  },
  {
      "id":5,
      "email":"charles.morris@reqres.in",
      "first_name":"Charles",
      "last_name":"Morris",
      "tag":"new_user"
  }
]

const newUsers = users.filter((user) => {
  return user.tag === "new_user";
})


const emailUsers = users.map((user) => {
  return user.email;
})

const emailOldUsers = users.filter((user) => {
  return user.tag === "old_user";
})


