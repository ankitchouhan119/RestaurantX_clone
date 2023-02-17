import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useButton41Cb() {
	const onClick = useCallback(callbackFactory("Button41", "about", "/about", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton42Cb() {
	const onClick = useCallback(callbackFactory("Button42", "about", "/about", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLink14Cb() {

	return {  }
}
export function useLink15Cb() {

	return {  }
}
export function useLink16Cb() {

	return {  }
}
export function useLink17Cb() {

	return {  }
}
export function useLink18Cb() {

	return {  }
}
export function useImage123Cb() {
	const onClick = useCallback(callbackFactory("Image123", "about", "/about", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex313Cb() {
	const onClick = useCallback(callbackFactory("Flex313", "about", "/about", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex314Cb() {
	const onClick = useCallback(callbackFactory("Flex314", "about", "/about", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex315Cb() {
	const onClick = useCallback(callbackFactory("Flex315", "about", "/about", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}