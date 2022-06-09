const leftArrow = document.querySelector('.sideMenuRules');
const rightArrow = document.querySelector('.sideMenuScore');

const rules = document.querySelector('.rulesBoard');
const score = document.querySelector('.scoreboard');

window.addEventListener('resize', function (event)
{
    if (window.innerWidth > 700 && window.innerWidth < 1000)
    {
        if (score.classList.contains('scoreBoardUnActive') && rules.classList.contains('rulesBoardUnActive')) 
        {
            score.classList.add('scoreBoardActive');
            rules.classList.remove('rulesBoardActive');

            score.classList.remove('scoreBoardUnActive');
            rules.classList.add('rulesBoardUnActive');

            leftArrow.style.display = "block";
            rightArrow.style.display = "none";
        }
        else if (score.classList.contains('scoreBoardActive')) 
        {

            leftArrow.style.display = "block";
            rightArrow.style.display = "none";
        } else if (rules.classList.contains('rulesBoardActive')) 
        {
            leftArrow.style.display = "none";
            rightArrow.style.display = "block";
        }
    }
    if (window.innerWidth < 700)
    {
        leftArrow.style.display = "block";
        rightArrow.style.display = "block";
    }
});

leftArrow.addEventListener('click', () =>
{
    if (window.innerWidth > 700 && window.innerWidth < 1000)
    {
        leftArrow.style.display = "none";
        rightArrow.style.display = "block";
        rules.classList.remove('rulesBoardUnActive');
        rules.classList.add('rulesBoardActive');

        score.classList.remove('scoreBoardActive');
        score.classList.add('scoreBoardUnActive');
    }
    if (window.innerWidth < 700)
    {
        if (score.classList.contains('scoreBoardActive'))
        {
            score.classList.remove('scoreBoardActive');
            score.classList.add('scoreBoardUnActive');
        }
        else
        {
            rules.classList.remove('rulesBoardUnActive');
            rules.classList.add('rulesBoardActive');
            score.classList.add('scoreBoardUnActive');
        }
    }
});

rightArrow.addEventListener('click', () =>
{
    if (window.innerWidth > 700 && window.innerWidth < 1000)
    {
        leftArrow.style.display = "block";
        rightArrow.style.display = "none";
        score.classList.remove('scoreBoardUnActive');
        score.classList.add('scoreBoardActive');
        rules.classList.remove('rulesBoardActive');
        rules.classList.add('rulesBoardUnActive');
    }
    if (window.innerWidth < 700)
    {

        if (rules.classList.contains('rulesBoardActive'))
        {
            rules.classList.remove('rulesBoardActive');
            rules.classList.add('rulesBoardUnActive');
        }
        else
        {
            score.classList.remove('scoreBoardUnActive');
            score.classList.add('scoreBoardActive');
            rules.classList.add('rulesBoardUnActive');
        }
    }


});