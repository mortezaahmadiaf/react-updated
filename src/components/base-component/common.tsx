export const CreateHeader = (props: { headername: string }) => {
  return (
    <div
      className="mt-4 px-2 mb-12"
      style={{
        width: 'fit-content',
        background: 'gray',
        color: 'white',
        marginInlineStart: '-1.3rem',
        borderEndEndRadius: 15,
        borderStartEndRadius: 15,
      }}
    >
      <div className={' pt-3 pb-3 pr-3 pl-2'}>{props.headername}</div>
    </div>
  )
}

export const Footer = (props: {
  closeDialog?: () => void
  className?: string
  updating?: boolean
  disabled?: boolean
}) => (
  <div className="w-full pt-4">
    <hr />
    <div
      className={`flex w-full justify-between ${
        props.className ? props.className : ''
      } mt-4`}
      style={{
        color: 'white',
        overflow: 'hidden',
        fontWeight: 'bold',
        fontSize: '16px',
        textTransform: 'uppercase',
        paddingRight: '1rem',
      }}
    >
      <div
        onClick={(e) => {
          e.preventDefault()
          props.closeDialog?.()
        }}
        className=" text-red-600 flex items-center px-6 py-2 hover:bg-red-200  cursor-pointer rounded-lg  underline underline-offset-8 transition-all  hover:scale-110"
      >
        بستن
      </div>
      <button
        disabled={props.updating || props.disabled}
        type="submit"
        className={`flex items-center justify-center text-white  rounded-lg text-lg  py-3 bg-gradient-to-br  ${
          !(props.updating || props.disabled)
            ? 'from-primary-600 to-primary-500  hover:from-primary-500 hover:to-primary-400 transition-all  hover:scale-105'
            : 'from-gray-700 to-gray-500 '
        } px-10 `}
      >
        <i
          className={`${
            props.updating ? 'flex' : 'hidden'
          } mx-2 pi pi-spin pi-spinner `}
          style={{ fontSize: '1.4rem' }}
        />
        ذخیره
      </button>
    </div>
  </div>
)
