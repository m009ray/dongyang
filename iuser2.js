function MyName() {
    this.TitleName = "성명 : ";
    this.AlertTitleName = function() {
        console.log(this.TitleName);              
    }
}

function MyGrade() {
    this.Grade = "학년 : "
    this.AlertGrade = function() {
        console.log(this.Grade);
    }
}

function MyMajor() {
    this.Major = "학과 : "
    this.AlertMajor = function() {
        console.log(this.Major);
    }
}

MyName.prototype.Owner = "강환규";
MyName.prototype.AlertOwner = function() {
    console.log(this.Owner);
}

MyGrade.prototype.Owner = "3학년";
MyGrade.prototype.AlertOwner = function() {
    console.log(this.Owner);
}

MyMajor.prototype.Owner = "소프트웨어 정보과";
MyMajor.prototype.AlertOwner = function() {
    console.log(this.Owner);
}

var name = new MyName();
var grade = new MyGrade();
var major = new MyMajor();

console.log(name.TitleName+name.Owner);
console.log(grade.Grade+grade.Owner);
console.log(major.Major+major.Owner);

// 메서드를 호출한다.
//console.log("메서드를 호출");
//name.AlertTitleName();
//name.AlertOwner();
