// Soldier
class Soldier 
{constructor(health, strength)
    {
this.health=health;
this.strength=strength;
    }
    attack(){return this.strength}
    receiveDamage(theDamage){this.health=this.health-theDamage}
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength)
    {super(health,strength)
        this.name=name
    }
    receiveDamage(theDamage)
    {
         super.receiveDamage(theDamage);
    if(this.health>0)
    {
        return `${this.name} has received ${theDamage} points of damage`
    }
else return `${this.name} has died in act of combat`;
}
battleCry(){return `Odin Owns You All!`}
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength)
    {
    super(health, strength)
}
receiveDamage(theDamage)
    {
        this.health=this.health-theDamage;
    if(this.health>0){
        return `A Saxon has received ${theDamage} points of damage`
    }
else return "A Saxon has died in combat";
}
}

// War
class War { 
        vikingArmy=[]
        saxonArmy=[]
    addViking(aVikingObject){this.vikingArmy.push(aVikingObject)}
    addSaxon(aSaxongObject){this.saxonArmy.push(aSaxongObject)}
    vikingAttack(){let result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
    if(this.saxonArmy[0].health<=0){this.saxonArmy.shift()}
return result}
    saxonAttack(){let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
        if(this.vikingArmy[0].health<=0){this.vikingArmy.shift()}
    return result}
    showStatus(){ return (this.saxonArmy.length>0 ? (this.vikingArmy.length>0 ? "Vikings and Saxons are still in the thick of battle.":"Saxons have fought for their lives and survived another day..."):"Vikings have won the war of the century!" )}

}
