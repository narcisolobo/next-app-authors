import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const EMAIL_REGEX = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/);
const PASSWORD_REGEX = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter your email.'],
      validate: {
        validator: (email) => EMAIL_REGEX.test(email),
        message: 'Please enter a valid email.',
      },
    },
    password: {
      type: String,
      required: [true, 'Please enter your password.'],
      validate: {
        validator: (value) => PASSWORD_REGEX.test(value),
        message: '1 uppercase, 1 lowercase, 1 number, at least 8 characters.',
      },
    },
  },
  { timestamps: true }
);

userSchema.virtual('confirmPassword');

userSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Passwords do not match.');
  }
  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.models.User || mongoose.model('User', userSchema);
