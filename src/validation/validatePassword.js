import PasswordValidator from 'password-validator';

const schema = new PasswordValidator();

schema
	.is()
	.min(8)
	.is()
	.max(20)
	.has()
	.uppercase()
	.has()
	.lowercase()
	.has()
	.digits(1)
	.has()
	.symbols(1)
	.has()
	.not()
	.spaces();

export const validatePassword = (value) => {
	const errors = schema.validate(value, { list: true });
	return errors;
};
