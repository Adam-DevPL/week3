import { Button, ButtonMod1, ButtonMod2, Input, Textarea } from '../components/Form';
import Card from '../components/Card';
import Menu from '../components/Menu';
import MenuLink from '../components/MenuLink';
import Content from '../components/Content';
import Employees from '../components/Employees';

const alizarin = '#e74c3c';
const clouds = '#ecf0f1';

const styles = {
    display: 'grid',
    gridTemplateColumns: '100px auto',

    content: {
        gridColumnStart: 2,
        gridColumnEnd: 3,
    },

    menu: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
    }
}

function Home() {
    return (
        <div style={styles}>

            <Menu style={styles.menu}>
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to="/contact" isActive>Contact</MenuLink>
                <MenuLink to="/posts">Posts</MenuLink>
            </Menu>

            <Content style={styles.content}>
                <h1>Week 3 Tasks</h1>
                <Button label='Click me' />
                <ButtonMod1 bgColor={alizarin} color={clouds}>Click me</ButtonMod1>
                <ButtonMod2 icon='user' label='Click me' />
                <Input />
                <Textarea />
                <h2>4. Komponent Card</h2>
                <Card
                    title='Shrim and Chorizo Paella'
                    intro='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
                    showMore
                    content='"Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."' />
                <Employees />
            </Content>

        </div>
    );
}

export default Home;