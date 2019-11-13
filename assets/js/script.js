$(function(){
    $('form').on('submit', function(event){
    event.preventDefault();
    var name = $('#name').val();
    var firstName = $('#firstName').val();
    var birthDate = $('#birthDate').val();
    var birthPlace = $('#birthPlace').val();
    var job = $('#job').val();
    var society = $('#society').val();

    var checkName = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/.test(name);
        console.log(checkName);
    var checkFirstName = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/.test(firstName);
        console.log(checkFirstName);
    var checkBirthDate = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.test(birthDate);
        console.log(checkBirthDate);
    var checkBirthPlace = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/.test(birthPlace);
        console.log(birthPlace); 
    var checkJob = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/.test(job);
        console.log(checkJob);
    var checkSociety = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/.test(society);
        console.log(checkSociety);
    var result ='';
        if (checkName && checkFirstName && checkBirthDate && checkBirthPlace && checkJob && checkSociety) {
            birthDate = birthDate.replace(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/, '$3/$2/$1');
         result = 'Je suis ' + name + ' ' + firstName + ', né le ' + birthDate + ' à ' + birthPlace + ', actuellement ' + job + ' à ' + society;
        }
        else{
            result ='Un champ est mal renseigné !'
        }
            $('#pres').html(result);
        
        });
        
    });