import React, { FC } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'

const styles = {
  logo: {
    height: 48,
    width: 48,
    filter:
      'drop-shadow(rgba(0, 0, 0, 0.09) 0px 0px 2px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 1px 2px)',
  },
}

interface Props extends WithStylesProps<typeof styles> {}

const Header: FC<Props> = ({ classes }) => {
  return (
    <header>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        className={classes.logo}
        id='home-logo'
      >
        <title>Home HT</title>
        <path
          d='M20.583 4.46234H3.09552V19.5779H20.583V4.46234Z'
          fill='#333333'
        ></path>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M5.44605 0H18.5534C21.5611 0 23.9994 2.4384 24 5.4462V18.5538C24 21.5616 21.5617 24 18.5539 24H5.44605C2.43834 24 0 21.5616 0 18.5544V5.4462C0 2.4384 2.43834 0 5.44605 0ZM5.88525 18.699C6.19605 18.699 6.44805 18.447 6.44805 18.1362V13.5078C6.44805 13.197 6.19605 12.945 5.88525 12.945C5.57445 12.945 5.32245 13.197 5.32245 13.5078V18.1362C5.32245 18.447 5.57445 18.699 5.88525 18.699ZM5.88525 11.0856C6.19605 11.0856 6.44805 10.8336 6.44805 10.5228V5.8944C6.44805 5.5836 6.19605 5.3316 5.88525 5.3316C5.57445 5.3316 5.32245 5.5836 5.32245 5.8944V10.5228C5.32245 10.8336 5.57445 11.0856 5.88525 11.0856ZM8.20481 18.699C8.51557 18.699 8.76757 18.447 8.76757 18.1362V13.5078C8.76757 13.197 8.51557 12.945 8.20481 12.945C7.89401 12.945 7.64201 13.197 7.64201 13.5078V18.1362C7.64201 18.447 7.89401 18.699 8.20481 18.699ZM10.5237 18.699C10.8345 18.699 11.0865 18.447 11.0865 18.1362V13.5078C11.0865 13.197 10.8345 12.945 10.5237 12.945C10.2129 12.945 9.96094 13.197 9.96094 13.5078V18.1362C9.96094 18.447 10.2129 18.699 10.5237 18.699ZM10.5237 11.0856C10.8345 11.0856 11.0865 10.8336 11.0865 10.5228V5.8944C11.0865 5.5836 10.8345 5.3316 10.5237 5.3316C10.2129 5.3316 9.96094 5.5836 9.96094 5.8944V10.5228C9.96094 10.8336 10.2129 11.0856 10.5237 11.0856ZM13.4961 18.5496H18.1244C18.4196 18.5496 18.6589 18.3102 18.6589 18.015C18.6589 17.7198 18.4196 17.4804 18.1244 17.4804H13.4961C13.2009 17.4804 12.9615 17.7198 12.9615 18.015C12.9615 18.3102 13.2009 18.5496 13.4961 18.5496ZM13.4919 13.0998C13.1967 13.0998 12.9573 13.3392 12.9573 13.6344C12.9573 13.9302 13.1967 14.1696 13.4919 14.169H18.1202C18.4154 14.169 18.6547 13.9296 18.6547 13.6344C18.6547 13.3392 18.4154 13.0998 18.1202 13.0998H13.4919ZM13.4961 16.3566H18.1244C18.4196 16.3566 18.6589 16.1172 18.6589 15.822C18.6589 15.5268 18.4196 15.2874 18.1244 15.2874H13.4961C13.2009 15.2874 12.9615 15.5268 12.9615 15.822C12.9615 16.1172 13.2009 16.3566 13.4961 16.3566ZM15.8048 11.0904C16.5986 11.0904 17.3228 10.767 17.8424 10.2462C18.3626 9.7266 18.6865 9.0024 18.6865 8.2086C18.6865 7.4148 18.3632 6.6906 17.8424 6.171C17.3228 5.6502 16.5986 5.3268 15.8048 5.3268C15.011 5.3268 14.2868 5.6502 13.7673 6.171C13.2465 6.6906 12.9225 7.4148 12.9231 8.2086C12.9231 9.0024 13.2465 9.7266 13.7673 10.2462C14.2868 10.767 15.011 11.0904 15.8048 11.0904ZM14.5634 6.96829C14.8826 6.64969 15.3182 6.45409 15.8048 6.45409C16.2914 6.45409 16.7264 6.64969 17.0462 6.96829C17.3648 7.28749 17.5597 7.72309 17.5603 8.20969C17.5603 8.69629 17.3648 9.13129 17.0462 9.45109C16.727 9.76969 16.2914 9.96529 15.8048 9.96529C15.3182 9.96529 14.8832 9.76969 14.5634 9.45109C14.2448 9.13189 14.0492 8.69629 14.0492 8.20969C14.0492 7.72309 14.2448 7.28809 14.5634 6.96829Z'
          fill='#FFFFFF'
        ></path>
      </svg>
    </header>
  )
}

export default withStyles(styles)(Header)
