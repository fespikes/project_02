export const patterns = {
  password: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9A-Za-z\(\)`~!@#\$%\^&\*-_\+=\|/\\\{\}\[\]:;"'<>,\.\?]{8,20}$/,
  // password: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/,
  email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
  phone: /^1[0-9]{10}$/,
};

export const hourlyDefaultFormat = '%H:%M';
