// Modules
import Axios from 'axios'

import { useState } from 'react'
import {
  Link,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
} from '@chakra-ui/react'

function Form() {

  const [check, setCheck] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const data = { check, name, subject, company, email, message }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (check !== '' || name === '' || subject === '' || email === '' || message === '') {
      setIsError(true) 
    } else { 
      setIsError(false)
    }

    if (isError === false) {
      try {
        await Axios.post('/api/contact', data)
        setSubmitted(true)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      {!submitted ? (
        <>
          <Heading fontSize="5xl" color="gray.700" pt="8" pb="1" ml="-2px" >How can I help?</Heading>
          <Text fontSize="1.05rem" color="#323b4e" py="4" pr="24%" >
            Please feel free to email me at <Link href={"mailto:hello@" + process.env.HOST_DOMAIN} color="blue.500" >
            {"hello@" + process.env.HOST_DOMAIN}</Link> or fill out the form below and I will get back to you as soon as possible..</Text>

          <Grid w="80%" templateColumns="1fr 1fr" rowGap="5" columnGap="4" py="4" >

            <FormControl display="none" >
              <Input name="check" onChange={e => setCheck(e.target.value)} />
            </FormControl>

            <FormControl isInvalid={name === '' && isError} isRequired >
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input name="name" id="name" placeholder='Your name' bg="gray.100" 
                onChange={e => setName(e.target.value)} value={name} />
              {name === '' && isError && (
                <FormHelperText color="red.500" >This field is required.</FormHelperText>
              )}
            </FormControl>

            <FormControl isInvalid={subject === '' && isError} isRequired>
              <FormLabel htmlFor='subject'>Subject</FormLabel>
              <Select name="subject" id="subject" bg="gray.100" defaultValue="---" onChange={e => setSubject(e.target.value)} >
                <option value="" disabled hidden></option>
                <option value="General" >General</option>
                <option value="Project Request" >Project Request</option>
                <option value="Other" >Other</option>
                <option disabled >---</option>
              </Select>
              {subject === '' && isError && (
                <FormHelperText color="red.500" >This field is required.</FormHelperText>
              )}
            </FormControl>

            <FormControl>
              <FormLabel htmlFor='company'>Company</FormLabel>
              <Input name="company" id="company" placeholder='Your company' bg="gray.100" 
                onChange={e => setCompany(e.target.value)} value={company} />
            </FormControl>

            <FormControl isInvalid={email === '' && isError} isRequired>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input name="email" id="email" placeholder='Email address' bg="gray.100" 
                onChange={e => setEmail(e.target.value)} value={email} />
              {email === '' && isError && (
                <FormHelperText color="red.500" >This field is required.</FormHelperText>
              )}
            </FormControl>

            <FormControl gridColumn="1/3" isInvalid={message === '' && isError} isRequired>
              <FormLabel htmlFor='message'>Message</FormLabel>
              <Textarea name="message" placeholder='Start typing here' bg="gray.100" 
                minH="100px" onChange={e => setMessage(e.target.value)} value={message} />
              {message === '' && isError && (
                <FormHelperText color="red.500" >This field is required.</FormHelperText>
              )}
            </FormControl>

            <Button variant="contact" onClick={handleSubmit} >Submit</Button>
          </Grid>
        </>
      ) : (
        <>
          <Heading fontSize="5xl" color="gray.700" pt="8" pb="1" ml="-2px" >Success!</Heading>
          <Text color="gray.600" py="4" pr="28%" >Your message has been sent.</Text>
        </>
      )}
    </>
  )
}

export default Form