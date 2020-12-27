// BTVN: Để quản lý các hộ dân cư trong một khu phố, người ta cần các thông tin sau: Số thành viên
//trong gia đình, Số nhà, thông tin mỗi cá nhân trong gia đình. Với mỗi cá nhân, người ta quản lý
//   các thông tin sau: Họ tên, Tuổi, Nghề nghiệp, số chứng minh nhân dân(duy nhất cho mỗi người).
// Yêu cầu 1: Hãy xây dựng class Person để quản lý thông tin của mỗi cá nhân.
// Yêu cầu 2: Xây dựng class Family để quản lý thông tin của từng hộ gia đình.
// Yêu cầu 2: Xây dựng class Town(khu phố) để quản lý các thông tin của từng hộ gia đình.
// Yêu cầu 3: Nhập vào các thông tin của các hộ dân, và làm sao để hiển thị thông tin của các hộ
//  trong khu phố.( hiển thị tuỳ ý miễn là có thông tin của cá nhân, của gia đình)

class Person {
    name
    age
    job
    idenCard
    constructor(name, age, job, idenCard){
        this.name = name
        this.age = age
        this.job = job
        this.idenCard = idenCard
        
    }
}

class Family {
    listPer
    houseAdd
    constructor(houseAdd, listPer){
        this.houseAdd = houseAdd
        this.listPer = []
    }
    addPer(person){
        this.listPer.push(person);
    }
    getlistPer(){
        for(const item of this.listPer){
            console.log(`Họ và tên: ${item.name}`)
            console.log(`Tuổi: ${item.age}`)
            console.log(`Nghề nghiệp: ${item.job}`)
            console.log(`Số CMND: ${item.idenCard}`)
            
        }
    }
}


class Town {
    listFam
    constructor(){
        this.listFam = []
    }
    addFamList(family){
        this.listFam.push(family)
    }
    getListOfFam(){
        for(const items of this.listFam)
        console.log(items)
    }
    // checkCard() {
    //     if(this.idenCard == this.idenCard){
    //         alert('Some thing was wrong in identity card');
    //     }
    // }
}


const per1 = new Person('Nguyen Van A',13,'hoc sinh',1111111111);
const per2 = new Person('Ngo Van B',19,'Sinh vien',2222222222);
const per3 = new Person('Trinh thi C',25,'Nhan vien',3333333333);
const per4 = new Person('Nguyen Thi D',29,'Bac Si',4444444444);
const per5 = new Person('A The A',100,'YTB',5555555555)

const fam1 = new Family(1401)
fam1.addPer(per1)
fam1.addPer(per2)

const fam2 = new Family(3406)
fam2.addPer(per3)
fam2.addPer(per4)
fam2.addPer(per4)

console.log('First family')
fam1.getlistPer()
console.log('\n')
console.log('second family')
fam2.getlistPer()
console.log('\n')
console.log('Town hall')
const town = new Town()
town.addFamList(fam1)
town.addFamList(fam2)
town.getListOfFam()
