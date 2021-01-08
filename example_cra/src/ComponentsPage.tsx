import styled from 'styled-components';
import {
  Avatar,
  Input,
  Select,
  Checkbox,
  Radio,
  Tooltip,
  Button,
  Capacity,
  Text,
  tokens,
  Chip,
  Link,
  Switch,
} from 'deskie-ui';
import { Search, BatteryAlert, Cast, Business } from '@styled-icons/material-outlined';
import { useForm, Controller } from 'react-hook-form';

const str = 'The evil rabbit jumps over the fence.';
const paragraph =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

const Chapter = styled.div`
  width: min(52rem, calc(100% - 2rem));
  padding: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: ${tokens.elevation[2]};

  .chapter-title {
    margin-top: 0;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
  }

  .stack-title {
    margin-top: 2.5rem;
    font-size: 0.875rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  .stack {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > * + * {
      margin-top: 1rem;
    }

    & > .stack-title {
      margin-top: 2.5rem;
    }
  }

  .row {
    display: flex;

    & > * + * {
      margin-left: 1rem;
    }
  }
`;

const Navbar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  a {
    font-size: 0.875rem;
    color: #898989;
    text-decoration: none;
    line-height: 2;
  }
`;

const tooltipPositions: ['top', 'right', 'left', 'bottom'] = ['top', 'right', 'left', 'bottom'];

function ComponentsPage() {
  const { register, control } = useForm();
  return (
    <>
      <Navbar>
        <a href="#text">Text</a>
        <a href="#avatar">Avatar</a>
        <a href="#avatar-group">Avatar Group</a>
        <a href="#input">Input</a>
        <a href="#select">Select</a>
        <a href="#checkbox">Checkbox</a>
        <a href="#radio">Radio</a>
        <a href="#tooltip">Tooltip</a>
        <a href="#button">Button</a>
        <a href="#capacity">Capacity</a>
        <a href="#chips">Chips</a>
        <a href="#switch">Switch</a>
      </Navbar>
      <Chapter id="text">
        <h2 className="chapter-title">Text</h2>
        <div className="stack">
          <h3 className="stack-title">Appearance</h3>
          <Text>{str} (default)</Text>
          <Text appearance="secondary">{str} (secondary)</Text>
          <Text appearance="faded">{str} (faded)</Text>
          <Text appearance="success">{str} (success)</Text>
          <Text appearance="warning">{str} (warning)</Text>
          <Text appearance="error">{str} (error)</Text>
          <h3 className="stack-title">Headings</h3>
          <Text h1>{str} (h1)</Text>
          <Text h2>{str} (h2)</Text>
          <Text h3>{str} (h3)</Text>
          <h3 className="stack-title">Paragraph</h3>
          <Text p>{paragraph}</Text>
          <h3 className="stack-title">Bold</h3>
          <Text b>{str}</Text>
          <h3 className="stack-title">Small</h3>
          <Text small>{str}</Text>
          <h3 className="stack-title">Link</h3>
          <Link href="https://www.deskie.nl/" target="_blank">
            https://www.deskie.nl/
          </Link>
          <h3 className="stack-title">Nested text</h3>
          <Text p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <Text b>Aenean commodo ligula eget dolor</Text>.
            Aenean massa. Cum sociis natoque penatibus et{' '}
            <Link href="https://www.deskie.nl/" target="_blank">
              magnis dis parturient
            </Link>{' '}
            montes, nascetur ridiculus mus.
          </Text>
          <Text p appearance="secondary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </Text>
        </div>
      </Chapter>
      <Chapter id="avatar">
        <h2 className="chapter-title">Avatar</h2>
        <div className="stack">
          <h3 className="stack-title">Without label</h3>
          <div className="row">
            <Avatar text="Sergio Mensing" isCurrentUser />
            <Avatar text="Ben Romijn" />
            <Avatar text="Shanna van Grevengoed" src="https://randomuser.me/api/portraits/women/10.jpg" />
          </div>
          <h3 className="stack-title">With label</h3>
          <div className="stack">
            <Avatar showLabel text="Sergio Mensing" isCurrentUser />
            <Avatar showLabel text="Ben Romijn" />
            <Avatar showLabel text="Shanna van Grevengoed" src="https://randomuser.me/api/portraits/women/10.jpg" />
          </div>
          <h3 className="stack-title">With sub label</h3>
          <div className="stack">
            <Avatar showLabel subText="2 Credits" text="Sergio Mensing" isCurrentUser />
            <Avatar showLabel subText="2 Credits" text="Ben Romijn" />
            <Avatar
              showLabel
              subText="2 Credits"
              text="Shanna van Grevengoed"
              src="https://randomuser.me/api/portraits/women/10.jpg"
            />
          </div>
        </div>
      </Chapter>
      <Chapter id="avatar-group">
        <h2 className="chapter-title">Avatar group</h2>
        <div className="stack">
          <h3 className="stack-title">Without label, horizontal</h3>
          <Avatar.Group count={3}>
            <Avatar text="Sergio Mensing" isCurrentUser />
            <Avatar text="Shanna van Grevengoed" src="https://randomuser.me/api/portraits/women/10.jpg" />
            <Avatar text="Ben Romijn" />
            <Avatar text="Ben Romijn" />
            <Avatar text="Ben Romijn" />
          </Avatar.Group>
          <h3 className="stack-title">With label, vertical</h3>
          <Avatar.Group count={3} direction="vertical">
            <Avatar showLabel text="Sergio Mensing" isCurrentUser />
            <Avatar showLabel text="Shanna van Grevengoed" src="https://randomuser.me/api/portraits/women/10.jpg" />
            <Avatar showLabel text="Ben Romijn" />
            <Avatar showLabel text="Ben Romijn" />
            <Avatar showLabel text="Ben Romijn" />
          </Avatar.Group>
        </div>
      </Chapter>
      <Chapter id="input">
        <h2 className="chapter-title">Input</h2>
        <div className="stack">
          <h3 className="stack-title">States</h3>
          <Input type="text" name="input-state-placeholder" placeholder="Placeholder" ref={register()} />
          <Input type="text" name="input-state-default" defaultValue="Input value" ref={register()} />
          <Input type="text" name="input-state-disabled" defaultValue="disabled input" disabled ref={register()} />
          <h3 className="stack-title">Status</h3>
          <Input type="text" name="input-status-default" status="default" placeholder="default" ref={register()} />
          <Input type="text" name="input-status-success" status="success" placeholder="success" ref={register()} />
          <Input type="text" name="input-status-warning" status="warning" placeholder="warning" ref={register()} />
          <Input type="text" name="input-status-error" status="error" placeholder="error" ref={register()} />
          <h3 className="stack-title">Icons</h3>
          <Input type="text" name="input-icon" placeholder="input with icon" icon={<Search />} ref={register()} />
          <Input
            type="text"
            name="input-icon-right"
            placeholder="input with icon right"
            iconRight={<BatteryAlert />}
            ref={register()}
          />
        </div>
      </Chapter>
      <Chapter id="select">
        <h2 className="chapter-title">Select</h2>
        <div className="stack">
          <h3 className="stack-title">States</h3>
          <Select name="select-states-default" ref={register()}>
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
          <Select name="select-states-value" defaultValue="Option 2">
            <option>Option 1</option>
            <option>Option 2 (default value)</option>
          </Select>
          <Select name="select-states-disabled" ref={register()} disabled>
            <option>Disabled</option>
          </Select>
          <h3 className="stack-title">Status</h3>
          <Select name="select-status-default" status="default" ref={register()}>
            <option>default</option>
          </Select>
          <Select name="select-status-success" status="success" ref={register()}>
            <option>success</option>
          </Select>
          <Select name="select-status-warning" status="warning" ref={register()}>
            <option>warning</option>
          </Select>
          <Select name="select-status-error" status="error" ref={register()}>
            <option>error</option>
          </Select>
          <h3 className="stack-title">Icons</h3>
          <Select name="select-icon" icon={<Search />} ref={register()}>
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
        </div>
      </Chapter>
      <Chapter id="checkbox">
        <h2 className="chapter-title">Checkbox</h2>
        <div className="stack">
          <h3 className="stack-title">States</h3>
          <Checkbox name="checkbox-uncontrolled" ref={register()}>
            Default (uncontrolled)
          </Checkbox>
          <Controller
            control={control}
            name="checkbox-controlled"
            render={({ value, onBlur, onChange, name }) => (
              <Checkbox name={name} value={value} onBlur={onBlur} onChange={onChange}>
                Default (controlled)
              </Checkbox>
            )}
          />
          <Checkbox name="checkbox-disabled" disabled ref={register()}>
            Disabled
          </Checkbox>
          <Checkbox name="checkbox-disabled-checked" disabled defaultChecked={true} ref={register()}>
            Disabled checked
          </Checkbox>
          <h3 className="stack-title">Without label</h3>
          <Checkbox name="checkbox-without-label" ref={register()} defaultChecked={true} />
          <h3 className="stack-title">The label can be anything</h3>
          <Checkbox name="checkbox-with-label" ref={register()}>
            <span style={{ fontFamily: 'Comic Sans MS' }}>
              Even a <i>Rainbow</i> 🌈 or a GIF
              <div style={{ marginTop: 8 }}>
                <img
                  width="200px"
                  alt="nyan cat"
                  src="https://i.pinimg.com/originals/e1/f2/3d/e1f23dfb401e68caf9e0d81e469a2b46.gif"
                />
              </div>
            </span>
          </Checkbox>

          <h3 className="stack-title">A checkbox group</h3>
          <Checkbox.Group>
            <Checkbox name="checkbox-group" ref={register()}>
              Checkbox 1
            </Checkbox>
            <Checkbox name="checkbox-group" ref={register()}>
              Checkbox 2
            </Checkbox>
            <Checkbox name="checkbox-group" ref={register()}>
              Checkbox 3
            </Checkbox>
          </Checkbox.Group>
          <h3 className="stack-title">A wrapped checkbox group</h3>
          <Checkbox.Group>
            {['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn'].map(
              (name) => (
                <Checkbox name="checkbox-group-wrapped" key={name} ref={register()}>
                  {name}
                </Checkbox>
              ),
            )}
          </Checkbox.Group>
          <h3 className="stack-title">A checkbox group (vertical)</h3>
          <Checkbox.Group direction="vertical">
            {['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn'].map(
              (name) => (
                <Checkbox name="checkbox-group-vertical" key={name} ref={register()}>
                  {name}
                </Checkbox>
              ),
            )}
          </Checkbox.Group>
        </div>
      </Chapter>

      <Chapter id="radio">
        <h2 className="chapter-title">Radio</h2>
        <div className="stack">
          <h3 className="stack-title">States</h3>
          <Radio name="radio-uncontrolled" ref={register()}>
            Default (uncontrolled)
          </Radio>
          <Controller
            control={control}
            name="radio-controlled"
            render={({ value, onBlur, onChange, name }) => (
              <Radio name={name} value={value} onBlur={onBlur} onChange={onChange}>
                Default (controlled)
              </Radio>
            )}
          />
          <Radio name="radio-disabled" disabled ref={register()}>
            Disabled
          </Radio>
          <Radio name="radio-disabled-checked" disabled defaultChecked={true} ref={register()}>
            Disabled checked
          </Radio>
          <h3 className="stack-title">Without label</h3>
          <Radio name="radio-without-label" ref={register()} defaultChecked={true} />
          <h3 className="stack-title">The label can be anything</h3>
          <Radio name="radio-with-label" ref={register()}>
            <span style={{ fontFamily: 'Comic Sans MS' }}>
              Even a <i>Rainbow</i> 🌈 or a GIF
              <div style={{ marginTop: 8 }}>
                <img
                  width="200px"
                  alt="nyan cat"
                  src="https://i.pinimg.com/originals/e1/f2/3d/e1f23dfb401e68caf9e0d81e469a2b46.gif"
                />
              </div>
            </span>
          </Radio>

          <h3 className="stack-title">A radio group</h3>
          <Radio.Group>
            <Radio value="Radio 1" name="radio-group" ref={register()}>
              Radio 1
            </Radio>
            <Radio value="Radio 2" name="radio-group" ref={register()}>
              Radio 2
            </Radio>
            <Radio value="Radio 3" name="radio-group" ref={register()}>
              Radio 3
            </Radio>
          </Radio.Group>
          <h3 className="stack-title">A wrapped radio group</h3>
          <Radio.Group>
            {['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn'].map(
              (name, index) => (
                <Radio value={name} name="radio-group-wrapped" key={index} ref={register()}>
                  {name}
                </Radio>
              ),
            )}
          </Radio.Group>
          <h3 className="stack-title">A radio group (vertical)</h3>
          <Radio.Group direction="vertical">
            {['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn'].map(
              (name, index) => (
                <Radio value={name} name="radio-group-vertical" key={index} ref={register()}>
                  {name}
                </Radio>
              ),
            )}
          </Radio.Group>
        </div>
      </Chapter>
      <Chapter id="tooltip">
        <h2 className="chapter-title">Tooltip</h2>
        <div className="stack">
          <h3 className="stack-title">Positions</h3>
          {tooltipPositions.map((position) => (
            <div
              style={{
                padding: '2rem',
                margin: '0.5rem 0',
                border: '1px solid #eee',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Tooltip content="A Tooltip" placement={position}>
                <span>Tooltip at the {position}</span>
              </Tooltip>
            </div>
          ))}
        </div>
      </Chapter>
      <Chapter id="button">
        <h2 className="chapter-title">Button</h2>
        <div className="stack">
          <h3 className="stack-title">Appearance</h3>
          <div className="row">
            <Button appearance="default">Primary button</Button>
            <Button appearance="secondary">Secondary button</Button>
            <Button appearance="danger">Danger button</Button>
          </div>
          <h3 className="stack-title">States</h3>
          <div className="row">
            <Button disabled>Disabled button</Button>
          </div>
          <h3 className="stack-title">Sizes</h3>
          <div className="row">
            <Button>Primary button</Button>
            <Button size="small">Primary button</Button>
          </div>
          <div className="row">
            <Button appearance="secondary">Secondary button</Button>
            <Button appearance="secondary" size="small">
              Secondary button
            </Button>
          </div>
          <h3 className="stack-title">With icon</h3>
          <div className="row">
            <Button icon={<Business />}>Button with icon</Button>
            <Button iconRight={<Cast />}>Button with icon</Button>
            <Button icon={<BatteryAlert />} />
          </div>
          <div className="row">
            <Button appearance="secondary" icon={<Business />}>
              Button with icon
            </Button>
            <Button appearance="secondary" iconRight={<Cast />}>
              Button with icon
            </Button>
            <Button appearance="secondary" icon={<BatteryAlert />} />
          </div>
        </div>
      </Chapter>
      <Chapter id="capacity">
        <h2 className="chapter-title">Capacity</h2>
        <div className="stack">
          <h3 className="stack-title">Sizes</h3>
          <div className="row">
            <Capacity capacity={0} />
            <Capacity capacity={20} />
            <Capacity capacity={80} />
            <Capacity capacity={100} />
          </div>
          <div className="row">
            <Capacity size="large" capacity={0} />
            <Capacity size="large" capacity={20} />
            <Capacity size="large" capacity={80} />
            <Capacity size="large" capacity={100} />
          </div>
          <h3 className="stack-title">With label</h3>
          <div className="row">
            <Capacity capacity={0}>0 / 5</Capacity>
            <Capacity capacity={20}>1 / 5</Capacity>
            <Capacity capacity={80}>4 / 5</Capacity>
            <Capacity capacity={100}>5 / 5</Capacity>
          </div>
          <div className="row">
            <Capacity size="large" capacity={0}>
              0%
            </Capacity>
            <Capacity size="large" capacity={20}>
              20%
            </Capacity>
            <Capacity size="large" capacity={80}>
              80%
            </Capacity>
            <Capacity size="large" capacity={100}>
              100%
            </Capacity>
          </div>
        </div>
      </Chapter>
      <Chapter id="chips">
        <h2 className="chapter-title">Chips</h2>
        <div className="stack">
          <h3 className="stack-title">States</h3>
          <div className="row">
            <Chip selected>Selected</Chip>
            <Chip>Not selected</Chip>
          </div>
          <h3 className="stack-title">With icon</h3>
          <div className="row">
            <Chip selected hasIcon>
              Selected
            </Chip>
            <Chip>Not selected</Chip>
          </div>
          <h3 className="stack-title">Custom icon</h3>
          <div className="row">
            <Chip selected hasIcon icon={<BatteryAlert />}>
              Selected
            </Chip>
            <Chip hasIcon icon={<BatteryAlert />}>
              Not selected
            </Chip>
          </div>
        </div>
      </Chapter>
      <Chapter id="switch">
        <h2 className="chapter-title">Switch</h2>
        <div className="stack">
          <h3 className="stack-title">States</h3>
          <Switch ref={register()} name="switch-uncontrolled">
            Default (uncontrolled)
          </Switch>
          <Controller
            control={control}
            name="switch-controlled"
            render={({ name, onChange, value }) => (
              <Switch checked={value} onChange={onChange} name={name}>
                Default (controlled)
              </Switch>
            )}
          ></Controller>
          <Switch disabled>Disabled</Switch>
          <Switch disabled checked={true} readOnly>
            Disabled (checked)
          </Switch>
          <h3 className="stack-title">Without a label</h3>
          <Switch ref={register()} name="switch-without-label" />
        </div>
      </Chapter>
    </>
  );
}

export default ComponentsPage;
