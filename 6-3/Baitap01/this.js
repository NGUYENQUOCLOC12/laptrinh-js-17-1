var student =  {
    name: 'Nguyen Quoc Loc',
    getName: function(){
        console.log(this.name);
        return this.name;
    }
};
var _deStudent =student.getName();