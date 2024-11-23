import React from "react";

// Define the props and state interfaces
interface Props {
  options: string[];
  placeholder: string;
  className?: string;
}

interface State {
  selectedOption: string;
}

class DropdownOptions extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedOption: "", // Initialize with an empty string
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option: string) {
    this.setState({ selectedOption: option });
  }

  render() {
    return (
      <div>
        <Dropdown
          options={this.props.options}
          onChange={this._onSelect}
          value={this.state.selectedOption}
          placeholder={this.props.placeholder}
          className={this.props.className}
        />
        {/* <p>Selected Option: {this.state.selectedOption}</p> */}
      </div>
    );
  }
}

// Dropdown component
interface DropdownProps {
  options: string[];
  onChange: (option: string) => void;
  value: string;
  placeholder: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  value,
  placeholder,
  className,
}) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className={className}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownOptions;
