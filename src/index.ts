const _getTime = (): Array<number> => {
  const date: Date = new Date();

  let hours: number = date.getHours();
  let minutes: number = date.getMinutes();
  let seconds: number = date.getSeconds();

  return [hours, minutes, seconds];
};

const _getTimeSectionComponents = (section: number): Array<string> => {
  return section.toString().padStart(2, "0").split("");
};

const _convertComponentsToBinary = (
  components: Array<string>
): Array<string> => {
  return components.map((component: string) => {
    return Number(component).toString(2).padStart(4, "0");
  });
};

const _printToConsole = (components: Array<Array<string>>) => {
  console.clear();

  for (let i = 0; i < 4; i++) {
    let row: string = "";
    for (let j = 0; j < 3; j++) {
      row += components[j][0][i] + " ";
      row += components[j][1][i] + " ";
    }

    console.log(row);
  }
};

setInterval(() => {
  let [hours, minutes, seconds] = _getTime();

  let hourComponents = _getTimeSectionComponents(hours);
  let minuteComponents = _getTimeSectionComponents(minutes);
  let secondComponents = _getTimeSectionComponents(seconds);

  let hourBinaryComponets = _convertComponentsToBinary(hourComponents);
  let minuteBinaryComponents = _convertComponentsToBinary(minuteComponents);
  let secondBinaryComponents = _convertComponentsToBinary(secondComponents);

  let components = [
    hourBinaryComponets,
    minuteBinaryComponents,
    secondBinaryComponents,
  ];

  _printToConsole(components);
}, 1000);
