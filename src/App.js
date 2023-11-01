import {MissionUtils} from "@woowacourse/mission-utils";

class App {
    async setRacingList () {
        const { readLineAsync } = MissionUtils.Console
        const cars = []
        const inputCarName = await readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")
        const carNames = inputCarName.split(',')

        carNames.forEach((name)=> {
            this.checkingError(name)
            cars.push({name, distanceDriven:0})
        })
        return cars
    }

    checkingError (name) {
        let errorMessage = new Error("[ERROR] 잘못된 데이터를 입력했습니다.")
        if(name.length > 5 || name.length <= 0){
            throw errorMessage
        }
    }
    async play() {

    }
}

export default App;
