import StatusCal from './StatusCal';
import LanguageSupport from './LanguageSupport';
import './MainPanel.css'

function MainPanel(props) {
  const data0 = { "base": 100, "wild_buff": 10 }
  const data1 = { "base": 500, "wild_buff": 10 }

  const language = new LanguageSupport(props.language)

  return (
    <div className="ark-calculator">
      <div className="status-container">
        <div className="status-attr">{language.String.TableAttr}</div>
        <div className="status-base">{language.String.TableBase}</div>
        <div className="status-value">{language.String.TableValue}</div>
        <div className="status-point">{language.String.TablePoint}</div>
      </div>
      <StatusCal type={language.String.AttributeHealth} data={data0}></StatusCal>
      <StatusCal type={language.String.AttributeStamina} data={data1}></StatusCal>
    </div>
  )
}

export default MainPanel