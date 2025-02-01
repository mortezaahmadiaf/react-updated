/* eslint-disable  @typescript-eslint/no-explicit-any */

export const validtion = {
    required: "این فیلد اجباری است",
    email: "این فیلد باید شناسه الکترونیک باشد",
    matchPassword: "رمز عبور یکسان نیست"
}

export const getErrorMessage = (name: string, formik: any) => {
    const isFormFieldValid = (nam: any) => !!(formik.touched[nam] && formik.errors[nam]);

    if (isFormFieldValid(name)) return formik.errors[name];
};