import { Fragment } from "react"
import { Toaster } from "react-hot-toast"

const Toast = () => {
  return (
    <Fragment>
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid",
            background: "rgb(6, 8, 15)",
            color: "rgb(254, 255, 254)"
          },
          success: {
            style: {
              borderColor: "rgb(0, 204, 102)",
            },
          },
          error: {
            style: {
              borderColor: "rgb(255, 51, 51)",
            },
          },
        }}
      />
    </Fragment>
  )
}

export default Toast
