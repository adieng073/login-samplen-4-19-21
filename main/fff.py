package tests

import org.scalatest._
import pbd.PaleBlueDot

class Task3 extends FunSuite {

  val countriesFile: String = "data/countries.txt"
  val citiesFilename: String = "data/cities.csv"

  test("test 1") {
    val mapOfCities: Map[String, Map[String, Int]] = Map(
      "Yemen" -> Map(),
      "French Southern Territories" -> Map(),
      "Andorra" -> Map()
    )
    for ((input, expectedOutput) <- mapOfCities) {
      val computedOutput: Map[String, Int] = PaleBlueDot.cityPopulations(countriesFile, citiesFilename, input,input)
      assert((computedOutput == expectedOutput), input + "->" + computedOutput)
    }
  }
  test("test 2") {
    val mapOfList: Map[String, List[String]] = Map(
      "Andorra" -> List("les escaldes"),
      "Anguilla" -> List(),
      "Yemen" -> List("aden" , "ibb" ),
      "Oman" -> List("nizwa","ruwi","salalah"),
      "French Southern Territories" -> List(),
      "Afghanistan" -> List("baglan","gardez","gazni","herat","jalalabad","kabul","qandahar","qunduz")


    )
    for ((input, expectedOutput) <- mapOfList) {
      val computedOutput: List[String] = PaleBlueDot.aboveAverageCities(countriesFile, citiesFilename, input).sorted
      assert((computedOutput == expectedOutput), input + "->" + computedOutput)


    }
  }

