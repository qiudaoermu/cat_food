import Authority from './authority'

function showa(){
    console.log('aaaaaaaaa')
}
Authority.extendObj(
    function cac(avd) {
        console.log(avd)
    }
)


Authority.showa();
