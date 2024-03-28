import { IScreenProps } from '../types';
import { Layout } from '../layout';
//  estudar mais o https://www.htmldog.com/guides/html/advanced/
export const Tags = ({ setCurrentScreen }: IScreenProps) => {
  return (
    <Layout setCurrentScreen={setCurrentScreen} className="flex items-center justify-center flex-col gap-4">
      <div className="w-full">
        <div>
          <h3>date time</h3>
          <div>
            <p>
              Escrito por gabriel <time dateTime="2015-10-03">Segunda-feira, 03 de outubro de 2015</time>
            </p>

            <p>
              Escrito por Yenifer <time dateTime="2015-10-03 23:54">Segunda-feira, 03 de outubro de 2015</time>
            </p>
          </div>
        </div>

        <div>
          <h3>marcação</h3>
          <div>
            <blockquote>
              Isso é uma citação, e a <mark>lisa</mark> merece destaque
            </blockquote>
          </div>
        </div>

        <div>
          <h3>Indicar importância e outras</h3>
          <div>
            <p>
              {/* strong é importancia */}
              Exemplo de <strong>tag semântica</strong>.
            </p>
            <hr />

            {/* del texto foi excluido, atualizado */}
            {/* ins é texto adicionado */}
            <p>
              O preço era <del>R$ 150,00</del> <small>(Preço antigo)</small> e agora está apenas por <ins>R$ 99,00</ins>
            </p>

            <hr />
            <p>
              {/* em itálico */}
              Visite nosso site,<em>Oportunidade unica</em>
            </p>

            <hr />
            <p>
              A formula da água é H<sub>2</sub>0, e a ebulição da água é 100<sup>°</sup>C a nivel do mar
            </p>
          </div>
        </div>

        <div>
          <h3>comment condictional</h3>
          <div>
            <link href="styles.css" rel="stylesheet" />
            {/*
            
            only styles

            <!--[if IE]><link href="ie_styles.css" rel="stylesheet"><![endif]--></link>
            
            <!--[if IE 6> tags <![endif]-->
            <!--[if IE gt 6> tags <![endif]-->
            <!--[if IE gte 6> tags <![endif]-->
            <!--[if IE lt 6> tags <![endif]-->
            <!--[if IE lte 6> tags <![endif]-->
            */}
          </div>
        </div>

        <div>
          <h3>table</h3>
          <div>
            <div>
              <table className="w-full">
                <caption className="bg-blue-100" style={{ captionSide: 'bottom' }}>
                  Legend table
                </caption>

                <colgroup className="bg-purple-300">
                  <col className="bg-orange-300" />
                  <col className="bg-red-300" span={2} />
                  <col className="bg-teal-300" span={2} />
                  <col className="bg-green-300" />
                </colgroup>

                <thead>
                  <tr>
                    <th className="min-w-[200px] sticky left-0 z-20 bg-orange-300">Header 1</th>
                    <th className="min-w-[100px]">Header 2</th>
                    <th className="min-w-[100px]">Header 3</th>
                    <th className="min-w-[100px]">Header 4</th>
                    <th className="min-w-[100px]">Header 5</th>
                    <th className="min-w-[200px] sticky right-0 z-20 bg-green-300">Header 6</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <td className="min-w-[200px] sticky left-0 z-20 bg-orange-300">Footer 1</td>
                    <td className="min-w-[100px]">Footer 2</td>
                    <td className="min-w-[100px]">Footer 3</td>
                    <td className="min-w-[100px]">Footer 4</td>
                    <td className="min-w-[100px]">Footer 5</td>
                    <td className="min-w-[200px] sticky right-0 z-20 bg-green-300">Footer 6</td>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td className="min-w-[200px] sticky left-0 z-20 bg-orange-300">Cell a.1</td>
                    <td className="min-w-[100px]">Cell a.2</td>
                    <td className="min-w-[100px]">Cell a.3</td>
                    <td className="min-w-[100px]">Cell a.4</td>
                    <td className="min-w-[100px]">Cell a.5</td>
                    <td className="min-w-[200px] sticky right-0 z-20 bg-green-300">Cell a.6</td>
                  </tr>
                  <tr>
                    <td className="min-w-[200px] sticky left-0 z-20 bg-orange-300">Cell b.1</td>
                    <td className="min-w-[100px]">Cell b.2</td>
                    <td className="min-w-[100px]">Cell b.3</td>
                    <td className="min-w-[100px]">Cell b.4</td>
                    <td className="min-w-[100px]">Cell b.5</td>
                    <td className="min-w-[200px] sticky right-0 z-20 bg-green-300">Cell b.6</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <tbody>
    <tr>
      <th scope="row">Donuts</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">Stationery</th>
      <td>18,000</td>
    </tr>
  </tbody> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
