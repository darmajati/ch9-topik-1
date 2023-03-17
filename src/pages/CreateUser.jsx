import { useRef } from "react";
import { Form, Container, Label, FormGroup, Input, Button } from "reactstrap";

export default function CreateUser() {
    const title = useRef()
    const body = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            title: title.current.value,
            body: body.current.value
        }

        
    }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input id="title" name="title" type="text" innerRef={title}/>
        </FormGroup>

        <FormGroup>
          <Label for="body">Body</Label>
          <Input id="body" name="body" type="textarea" innerRef={body}/>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </Container>
  );
}
